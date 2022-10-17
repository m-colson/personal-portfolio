## Installation
```bash
    git clone https://github.com/m-colson/axom
    cargo install --path axom
```

## Examples

### Hello world
```
{
    "Hello, world!".print
}
```

### Primes
```
{
    is_divided_by = |n| |v| v | n;

    is_prime = |n| !any(1..=sqrt(n) -> is_divided_by(n));

    forever
        .scan(2, |a||| a+1)
        .filter(is_prime)
        .enumerate
        |> print
}
```