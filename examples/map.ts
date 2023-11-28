function main() {
  const data: number[] = [1, 2, 3];
  const doubled: number[] = data.map((x) => x * 2);
  const sum: number = doubled.reduce((acc, x) => acc + x, 0);

  console.log(`sum: ${sum}`);
}

main();
