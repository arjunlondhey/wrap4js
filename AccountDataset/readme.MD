[Account Dataset](https://www.notion.so/Account-Dataset-e9ebf8bffa9048efa4d934312f0e026d)

The `dataset.json` file should be used in the solution.

[dataset.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1560487e-a45e-4a5e-997a-c5e9e1d548c7/dataset.json)

- **hundredThousandairs()**
Return an array with accounts from bankBalances that are
greater than 100000 without using for or while loop
- **datasetWithRoundedDollar()**

    **DO NOT MUTATE DATA.**

    Return a new dataset where each bank object is a new object. `amount` and `state` values will be transferred to the new object. This new object is different, you will add one new key of `rounded`. `rounded` value is `amount` rounded to the nearest dollar.

    Example:

        {
            "amount": "134758.44",
            "state": "HI",
            "rounded": 134758
        }