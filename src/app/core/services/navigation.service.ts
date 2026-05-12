import { Injectable } from '@angular/core';

import {
  BackendRole,
  CRYPTO_ROLES,
  FINTECH_PARTNER_ROLES,
  INVESTMENT_ROLES,
  PAYMENT_ROLES,
  PersonaConfig
} from '../models/role.models';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
  roles?: BackendRole[];
}

export const PERSONAS: PersonaConfig[] = [
  {
    key: 'customer',
    label: 'Customer',
    icon: 'account_circle',
    route: '/customer',
    description: 'Personal account overview, transfers, and fraud history.',
    roles: ['CUSTOMER', 'ADMIN'],
    primaryAction: 'Open account',
    widgets: ['Balance posture', 'Recent transfers', 'Risk alerts']
  },
  {
    key: 'admin',
    label: 'Admin',
    icon: 'admin_panel_settings',
    route: '/admin',
    description: 'Platform governance, account status controls, and operational health.',
    roles: ['ADMIN'],
    primaryAction: 'Review platform',
    widgets: ['System health', 'Role coverage', 'Exception queue']
  },
  {
    key: 'employee',
    label: 'Bank Employee',
    icon: 'badge',
    route: '/employee',
    description: 'Assisted service desk for account lookup, deposits, and transaction review.',
    roles: ['TELLER', 'MANAGER', 'ADMIN'],
    primaryAction: 'Assist customer',
    widgets: ['Service queue', 'Daily deposits', 'Lookup volume']
  },
  {
    key: 'manager',
    label: 'Manager',
    icon: 'supervisor_account',
    route: '/manager',
    description: 'Branch-level controls, account exceptions, and fraud escalation review.',
    roles: ['MANAGER', 'ADMIN'],
    primaryAction: 'Approve action',
    widgets: ['Branch exposure', 'Approval queue', 'Risk mix']
  },
  {
    key: 'auditor',
    label: 'Auditor',
    icon: 'fact_check',
    route: '/auditor',
    description: 'Fraud case tracking, transaction reversals, and compliance evidence.',
    roles: ['FRAUD_ANALYST', 'MANAGER', 'ADMIN'],
    primaryAction: 'Audit case',
    widgets: ['Open cases', 'Confirmed fraud', 'Rules triggered']
  },
  {
    key: 'support',
    label: 'Support Agent',
    icon: 'support_agent',
    route: '/support',
    description: 'Customer care workspace for identity-safe account and transaction lookup.',
    roles: ['TELLER', 'MANAGER', 'ADMIN'],
    primaryAction: 'Resolve ticket',
    widgets: ['Ticket load', 'Lookup SLA', 'Escalations']
  },
  {
    key: 'merchant',
    label: 'Merchant',
    icon: 'storefront',
    route: '/merchant',
    description: 'Merchant payments, settlement transfers, and risk monitoring.',
    roles: [...PAYMENT_ROLES, 'ADMIN'],
    primaryAction: 'Settle batch',
    widgets: ['Settlement value', 'Payment success', 'Chargeback risk']
  },
  {
    key: 'loan-officer',
    label: 'Loan Officer',
    icon: 'request_quote',
    route: '/loan-officer',
    description: 'Loan disbursement account checks and repayment transaction oversight.',
    roles: ['TELLER', 'MANAGER', 'ADMIN'],
    primaryAction: 'Verify applicant',
    widgets: ['Applications', 'Disbursement readiness', 'Repayment health']
  },
  {
    key: 'investment',
    label: 'Investment User',
    icon: 'monitoring',
    route: '/investment',
    description: 'Investor cash account, allocation movement, and portfolio cash controls.',
    roles: [...INVESTMENT_ROLES, 'ADMIN'],
    primaryAction: 'Move funds',
    widgets: ['Cash allocation', 'Portfolio transfers', 'Risk flags']
  },
  {
    key: 'insurance',
    label: 'Insurance User',
    icon: 'health_and_safety',
    route: '/insurance',
    description: 'Premium collection, claim payouts, and customer account verification.',
    roles: ['CUSTOMER', 'MANAGER', 'ADMIN'],
    primaryAction: 'Process claim',
    widgets: ['Premiums', 'Claims paid', 'Account checks']
  },
  {
    key: 'cryptocurrency',
    label: 'Cryptocurrency User',
    icon: 'currency_bitcoin',
    route: '/cryptocurrency',
    description: 'Crypto wallet cash rails, exchange transfers, and fraud surveillance.',
    roles: [...CRYPTO_ROLES, 'ADMIN'],
    primaryAction: 'Fund wallet',
    widgets: ['Wallet inflow', 'Exchange outflow', 'Anomaly score']
  },
  {
    key: 'payment-gateway',
    label: 'Payment Gateway User',
    icon: 'payments',
    route: '/payment-gateway',
    description: 'Payment routing, settlement deposits, and transaction reversal controls.',
    roles: [...PAYMENT_ROLES, 'ADMIN'],
    primaryAction: 'Route payment',
    widgets: ['Gateway uptime', 'Authorization rate', 'Reversal queue']
  },
  {
    key: 'fintech-partner',
    label: 'FinTech Partner',
    icon: 'hub',
    route: '/fintech-partner',
    description: 'Partner integration operations, account provisioning, and API transaction checks.',
    roles: [...FINTECH_PARTNER_ROLES, 'ADMIN'],
    primaryAction: 'Sync partner',
    widgets: ['API volume', 'Provisioning', 'Partner risk']
  }
];

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly baseItems: NavItem[] = [
    { label: 'Dashboard', icon: 'space_dashboard', route: '/dashboard' },
    { label: 'Profile', icon: 'person', route: '/profile' },
    { label: 'Settings', icon: 'settings', route: '/settings' }
  ];

  personasForRole(role: BackendRole): PersonaConfig[] {
    return PERSONAS.filter((persona) => persona.roles.includes(role) || role === 'ADMIN');
  }

  navItems(role: BackendRole): NavItem[] {
    return [
      ...this.baseItems,
      ...this.personasForRole(role).map((persona) => ({
        label: persona.label,
        icon: persona.icon,
        route: persona.route,
        roles: persona.roles
      }))
    ];
  }

  persona(key: string | null | undefined): PersonaConfig {
    return PERSONAS.find((persona) => persona.key === key) ?? PERSONAS[0];
  }
}
