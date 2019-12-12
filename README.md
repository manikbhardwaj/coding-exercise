# coding-exercise

This project is an exercise to do the following actions:

Given an array of clicks, return the subset of clicks where:

    For each IP within each one hour period, only the most expensive click is placed into the result set.
    If more than one click from the same IP ties for the most expensive click in a one hour period, only place the earliest click into the result set.
    If there are more than 10 clicks for an IP in the overall array of clicks, do not include any of those clicks in the result set.

The result set should be stored in an array of hashes. Each hash should represent a click. The expected result set should be a subset of the original array.

To run project run: npm run solution

    this will generate a file called resultset.json in the project root directory
