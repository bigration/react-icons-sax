import React from 'react';
import Content from '../src/Content';
import { DashboardLayout } from '@bigration-libs/ui-elements';

export function Index() {
  return (
    <div>
      <DashboardLayout route={'sd'}>
        <Content />
      </DashboardLayout>
    </div>
  );
}

export default Index;
