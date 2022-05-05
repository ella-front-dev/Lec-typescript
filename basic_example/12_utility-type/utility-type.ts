interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts():Promise<Product[]>{}


// 2. 특정 상품의 상세정보를 나타내기 위한 함수  
// interface ProductDetail {
//   id: number; 
//   name: string; 
//   price: number
// }
type ShoppingItem = Pick<Product, 'id' | 'name'| 'price'> 

function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name'| 'price'>){}

// 3.특정 상품 정보를 업데이트(갱신)하는 함수
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>){}

// 4. 유틸리티 타입 구현 - Partial
interface UserProfile{
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?:string;
//   profilePhotoUrl?: string;
// }

// # 1.
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// # 2. 반복문 사용 => mapped Type
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl'] ?: UserProfile[p];
// }

//3. keyof 사용
type UserProfileKeys = keyof UserProfile
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
}

// #4. 제네릭 상용 
type Subset<T> = {
  [p in keyof T]?: T[p];
};

