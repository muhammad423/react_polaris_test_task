import { ButtonGroup, Button, BlockStack } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function TopButtonGroup() {
  const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);

  const handleFirstButtonClick = useCallback(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);

  const handleSecondButtonClick = useCallback(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]);

  return (
    <BlockStack inlineAlign='center'>
    <ButtonGroup variant="segmented">
      <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick} size='large'>
        Desktop
      </Button>
      <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick} size='large'>
        Mobile
      </Button>
    </ButtonGroup>
    </BlockStack>
  );
}
export default TopButtonGroup;