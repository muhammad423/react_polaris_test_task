import {ButtonGroup, Button, InlineGrid} from '@shopify/polaris';
import React from 'react';

function Buttons() {
  return (
    <div style={{margin: '20px 0px'}}>
     <InlineGrid gap={600} columns={3}>
      <Button variant="secondary"  size='large'>Block</Button>
      <Button variant="secondary" size='large' >Icons</Button>
      <Button variant="secondary" size='large' >Style</Button>
    </InlineGrid>
    </div>
  );
}

export default Buttons