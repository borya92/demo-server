const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function formatUSD(value) {
  if (!value) {
    return 0;
  }

  // logging
  console.log('formatting...');
  return usd.format(value);
}

export default formatUSD;
