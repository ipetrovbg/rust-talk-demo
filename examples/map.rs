fn main() {
    let data = vec![1, 2, 3];
    let doubled: Vec<u32> = data.iter().map(|x| x * 2).collect();
    let sum: u32 = doubled.iter().sum();

    println!("sum: {sum}");
}
