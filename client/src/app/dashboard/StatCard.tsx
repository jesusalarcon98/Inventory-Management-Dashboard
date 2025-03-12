import { JSX } from '@emotion/react/jsx-runtime';
import { LucideIcon } from 'lucide-react';
import React from 'react'

type StatDetail = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon
}

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
}

const StatCard = ({
  title,
  primaryIcon,
  details,
  dateRange,
}: StatCardProps) => {
  const formatPercent = (value: number) => {
    const signal = value >= 0 ? '+' : '-';
    return `${signal}${value.toFixed(2)}%`;
  };
}

const StatCard = (props: Props) => {
  return (
    <div>StatCard</div>
  )
}