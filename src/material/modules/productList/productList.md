#Productlist

productlist acts as a container and configuration for product item.

- productListDirective has `itemperpage` and `itemperlayout` attributes.

`itemperpage="10"` 
`itemlayout="grid"` or `itemlayout="list"` or `itemlayout="wall"` 


- Subdirectives can define content listing behaviour, such as :

`<sf-productlist-sort></sf-productlist-sort>`
`<sf-productlist-filter></sf-productlist-filter>`
`<sf-productlist-pagination></sf-productlist-pagination>`


These properties sort items in productlist, filter and paginate items.