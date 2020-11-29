## HashMap

This is an array implementation of hash map with vanilla javascript.


### Methods 

<code> set </code> 

<code> get </code>

<code> remove </code>

<code> size </code>

### Technical Approach

Hash Collision is real.
In order to solve this problem we followed the below methods: 

* initialize a decent array length 
* have a hash generation index divided mod times the array length
* we used separate chaining, so instead of having 1 level arrays with values we have nested tuples with key, value. We call them stores.


// TODO 
* make a resize() method which resizes the array length when we fill a percentage of the the array. i.e 80%
If we do that, we increase array length dynamically instead of having a big array in the beginning.




