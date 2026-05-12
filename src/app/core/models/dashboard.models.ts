export interface DashboardMetric {
  label: string;
  value: string;
  icon: string;
  trend: string;
  tone: 'neutral' | 'success' | 'warning' | 'danger';
}

export interface TableColumn<T = unknown> {
  key: string;
  label: string;
  value?: (row: T) => string | number;
}
