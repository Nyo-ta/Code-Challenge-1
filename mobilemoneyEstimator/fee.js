function estimateTransactionFee() {
  const input = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = Number(input);

  const feePercentage = 0.015 * amountToSend;

  // Apply fee rules (min KES 10, max KES 70)
  const transactionFee = Math.min(Math.max(feePercentage, 10), 70);

  // Calculate total amount
  const totalAmount = amountToSend + transactionFee;

  //output of the result
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalAmount}`);
  console.log("\nSend Money Securely!");
}
