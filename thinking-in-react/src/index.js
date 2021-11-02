import React from "react";
import ReactDOM from "react-dom";

const ProductCategoryRow = props => {
  const { product } = props;

  return (
    <tr>
      <th colSPan="2">
        {product.category}
      </th>
    </tr>
  )
}

const ProductRow = props => {
  const { product } = props;
  const coloredName = product.stocked ?
    product.name :
    <span style={{ color: "red"}}>{product.name}</span>;

  return (
    <tr>
      <td>{coloredName}</td><td align="right">{product.price}</td>
    </tr>
  );
};

const ProductTable = props => {
  const { products } = props;
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          product={product}
          key={product.category}
        />
      );
    }    
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table width="100%">
      <thead>
        <tr style={{ color: "blue"}}>
          <th align="left">Name</th><th align="right">Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />
        {" "}
        <span style={{ color: "green", fontSize: "smaller" }}>
          Only show products in stock
        </span>
      </p>
    </form>
  )
}

const FilterableProductTable = props => {
  const { products } = props;

  return (
    <div style={{ fontFamily: "sans-serif"}}>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}

const PRODUCTS = [
  { category: "Sporting Goods", 
    price: "$49.99", 
    stocked: true,
    name: "Football"},
  { category: "Sporting Goods", 
    price: "$9.99", 
    stocked: true, 
    name: "Baseball"},
  { category: "Sporting Goods", 
    price: "$29.99", 
    stocked: false, 
    name: "Basketball"},
  { category: "Electronics", 
    price: "$99.99", 
    stocked: true, 
    name: "iPod Touch"},
  { category: "Electronics", 
    price: "$399.99", 
    stocked: false, 
    name: "iPhone 5"},
  { category: "Electronics", 
    price: "$199.99", 
    stocked: true, 
    name: "Nexus 7"}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);