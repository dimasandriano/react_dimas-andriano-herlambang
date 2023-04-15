import { gql } from "@apollo/client";

export const getProductsQuery = gql`
	query getProducts {
		products {
			id
			productCategory
			productDescription
			productFreshness
			productName
			productPrice
			uuid
		}
	}
`;

export const deleteProductsByIdMutation = gql`
	mutation deleteProducts($id: Int!) {
		delete_products_by_pk(id: $id) {
			id
		}
	}
`;

export const insertProductsMutation = gql`
	mutation insertProductsMutation(
		$productName: String!
		$productCategory: String!
		$productFreshness: String!
		$productDescription: String!
		$productPrice: Int!
	) {
		insert_products_one(
			object: {
				productCategory: $productCategory
				productDescription: $productDescription
				productFreshness: $productFreshness
				productName: $productName
				productPrice: $productPrice
			}
		) {
			id
		}
	}
`;

export const getDetailProductsByUuidQuery = gql`
	query getDetailProductsByUuidQuery($uuid: uuid!) {
		products(where: { uuid: { _eq: $uuid } }) {
			productName
			id
			productCategory
			productDescription
			productFreshness
			productPrice
			uuid
		}
	}
`;

export const updateProductByUuidMutation = gql`
	mutation updateProductByUuidMutation(
		$uuid: uuid!
		$productName: String!
		$productCategory: String!
		$productFreshness: String!
		$productDescription: String!
		$productPrice: Int!
	) {
		update_products(
			where: { uuid: { _eq: $uuid } }
			_set: {
				productCategory: $productCategory
				productDescription: $productDescription
				productFreshness: $productFreshness
				productName: $productName
				productPrice: $productPrice
			}
		) {
			affected_rows
		}
	}
`;
