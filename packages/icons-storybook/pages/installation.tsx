import React from 'react';
import { DashboardLayout } from '@bigration-libs/ui-elements';
import InstallationContent from '../src/installation/InstallationContent';

export function Index() {
  return (
    <div>
      <DashboardLayout>
        <InstallationContent />
      </DashboardLayout>
    </div>
  );
}

export default Index;
