'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic analytics',
        'Community support',
        'Monthly reports',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Unlimited projects',
        '1TB storage',
        'Advanced analytics',
        'Priority support',
        'Weekly reports',
        'Custom integrations',
        'Team collaboration',
        'API access',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Everything in Professional',
        'Unlimited storage',
        'Real-time analytics',
        '24/7 dedicated support',
        'Custom contracts',
        'Advanced security',
        'White-label options',
        'SLA guarantee',
      ],
      highlighted: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. Scale up or down anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${
                !isAnnual
                  ? 'text-foreground'
                  : 'text-foreground/60'
              }`}
            >
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-primary/20 border border-primary/40"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="h-6 w-6 rounded-full bg-primary"
                animate={{ x: isAnnual ? 28 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            </motion.button>
            <span
              className={`text-sm font-medium transition-colors ${
                isAnnual
                  ? 'text-foreground'
                  : 'text-foreground/60'
              }`}
            >
              Yearly
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-2 inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold"
              >
                Save 17%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl border transition-all duration-300 p-8 ${
                plan.highlighted
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-background'
                  : 'border-border bg-card'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-foreground/60 mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-foreground/60">
                    {isAnnual ? '/year' : '/month'}
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 flex items-center justify-center gap-2 group ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5'
                }`}
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              {/* Features List */}
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Highlighted Border Animation */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none border border-primary/20 group-hover:border-primary/50 transition-colors" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="px-8 py-3 rounded-lg bg-muted text-foreground font-semibold hover:bg-muted/80 transition-colors">
            Talk to Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
