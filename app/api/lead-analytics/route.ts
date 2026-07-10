import { NextResponse } from 'next/server';

// In-memory lead storage (use database in production)
const leads: Map<
  string,
  {
    id: string;
    timestamp: string;
    name: string;
    phone: string;
    service: string;
    priority: 'high' | 'medium' | 'low';
    category: string;
    sentiment: 'positive' | 'neutral' | 'negative';
    status: 'new' | 'contacted' | 'qualified' | 'won' | 'lost';
  }
> = new Map();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const action = body.action;

    if (action === 'log') {
      // Log a new lead
      const leadId = `lead_${Date.now()}`;
      const lead = {
        id: leadId,
        timestamp: new Date().toISOString(),
        name: body.name,
        phone: body.phone,
        service: body.service,
        priority: body.priority || 'medium',
        category: body.category || 'general',
        sentiment: body.sentiment || 'neutral',
        status: 'new' as const,
      };

      leads.set(leadId, lead);

      return NextResponse.json({ ok: true, leadId, lead });
    }

    if (action === 'update-status') {
      // Update lead status
      const { leadId, status } = body;
      const lead = leads.get(leadId);

      if (!lead) {
        return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
      }

      lead.status = status;
      leads.set(leadId, lead);

      return NextResponse.json({ ok: true, lead });
    }

    if (action === 'get-analytics') {
      // Get analytics dashboard data
      const leadsArray = Array.from(leads.values());

      const analytics = {
        totalLeads: leadsArray.length,
        byPriority: {
          high: leadsArray.filter((l) => l.priority === 'high').length,
          medium: leadsArray.filter((l) => l.priority === 'medium').length,
          low: leadsArray.filter((l) => l.priority === 'low').length,
        },
        byStatus: {
          new: leadsArray.filter((l) => l.status === 'new').length,
          contacted: leadsArray.filter((l) => l.status === 'contacted').length,
          qualified: leadsArray.filter((l) => l.status === 'qualified').length,
          won: leadsArray.filter((l) => l.status === 'won').length,
          lost: leadsArray.filter((l) => l.status === 'lost').length,
        },
        bySentiment: {
          positive: leadsArray.filter((l) => l.sentiment === 'positive').length,
          neutral: leadsArray.filter((l) => l.sentiment === 'neutral').length,
          negative: leadsArray.filter((l) => l.sentiment === 'negative').length,
        },
        byService: leadsArray.reduce(
          (acc, lead) => {
            acc[lead.service] = (acc[lead.service] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>
        ),
        conversionRate: {
          total: leadsArray.length,
          qualified: leadsArray.filter((l) => l.status === 'qualified').length,
          won: leadsArray.filter((l) => l.status === 'won').length,
          rate: leadsArray.length
            ? `${(((leadsArray.filter((l) => l.status === 'won').length) / leadsArray.length) * 100).toFixed(1)}%`
            : '0%',
        },
        recentLeads: leadsArray.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 5),
      };

      return NextResponse.json({ ok: true, analytics });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Analytics route error:', error);
    return NextResponse.json({ error: 'Analytics error' }, { status: 500 });
  }
}
