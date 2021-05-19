import React from 'react';

import Projection from './Projection';

const PerformanceComponent = () => (
  <section>
    <h2>Overall performance</h2>
    <Projection type="application"/>
    <Projection type="premium" />
    <Projection type="paid" />
  </section>
)

export default PerformanceComponent;
