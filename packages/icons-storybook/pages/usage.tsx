import React from 'react';
import { DashboardLayout } from '@bigration-libs/ui-elements';
import UsageContent from '../src/usage/UsageContent';

export function Index() {
  return (
    <div>
      <DashboardLayout>
        <UsageContent />
      </DashboardLayout>
    </div>
  );
}

export default Index;
