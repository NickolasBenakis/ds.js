## HashMap

This is an array implementation of hash map with vanilla javascript.


### Methods 

<code> set </code>  : <i>  (key, value) </i> sets key, value

<code> get </code> : <i>  (key) </i> gets the key value

<code> remove </code> : <i>  (key) </i> removes the key element

<code> size </code> : returns the hashmap size 

### Technical Approach

Hash Collision is real.
In order to solve this problem we followed the below methods: 

* initialize a decent array length 
* have a hash generation index divided mod times the array length
* we used separate chaining, so instead of having 1 level arrays with values we have nested tuples with key, value. We call them stores.

#### Design

HashMap -> [ [hashKey0], [hashKey1], ...[hashKeyN] ]


hashKey0 -> [ [Key0], [Key1], ...[KeyN] ]

key0 -> [ key, value ] 


// TODO 
* make a resize() method which resizes the array length when we fill a percentage of the the array. i.e 80%
If we do that, we increase array length dynamically instead of having a big array in the beginning.




