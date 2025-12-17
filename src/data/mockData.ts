import { Item, User } from '@/store/useStore';

// Mock Items Data
export const mockItems: Item[] = [
    {
        id: '1',
        title: 'Premium Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        category: 'Electronics',
        rating: 4.8,
        price: 299.99,
        isFeatured: true,
    },
    {
        id: '2',
        title: 'Modern Minimalist Watch',
        description: 'Elegant timepiece with a sleek design perfect for any occasion.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        category: 'Fashion',
        rating: 4.6,
        price: 199.99,
        isFeatured: true,
    },
    {
        id: '3',
        title: 'Leather Messenger Bag',
        description: 'Handcrafted leather bag with multiple compartments for everyday use.',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        category: 'Accessories',
        rating: 4.7,
        price: 149.99,
        isFeatured: false,
    },
    {
        id: '4',
        title: 'Smart Fitness Tracker',
        description: 'Track your health and fitness goals with advanced sensors and long battery life.',
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
        category: 'Electronics',
        rating: 4.5,
        price: 129.99,
        isFeatured: true,
    },
    {
        id: '5',
        title: 'Vintage Camera',
        description: 'Classic film camera for photography enthusiasts and collectors.',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
        category: 'Photography',
        rating: 4.9,
        price: 499.99,
        isFeatured: false,
    },
    {
        id: '6',
        title: 'Minimalist Sneakers',
        description: 'Comfortable and stylish sneakers for everyday wear.',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
        category: 'Fashion',
        rating: 4.4,
        price: 89.99,
        isFeatured: false,
    },
    {
        id: '7',
        title: 'Portable Bluetooth Speaker',
        description: 'Waterproof speaker with 360-degree sound and 12-hour battery life.',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        category: 'Electronics',
        rating: 4.6,
        price: 79.99,
        isFeatured: true,
    },
    {
        id: '8',
        title: 'Designer Sunglasses',
        description: 'UV protection sunglasses with premium polarized lenses.',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
        category: 'Accessories',
        rating: 4.7,
        price: 159.99,
        isFeatured: false,
    },
];

// Mock User Data
export const mockUser: User = {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    preferences: {
        selectedInterests: ['Electronics', 'Fashion', 'Photography'],
        theme: 'light',
    },
};

// Mock Categories
export const mockCategories = [
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion', icon: '👔' },
    { id: 'accessories', name: 'Accessories', icon: '👜' },
    { id: 'photography', name: 'Photography', icon: '📷' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'home', name: 'Home & Living', icon: '🏠' },
];

// Helper function to get items by category
export const getItemsByCategory = (category: string): Item[] => {
    return mockItems.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
    );
};

// Helper function to get featured items
export const getFeaturedItems = (): Item[] => {
    return mockItems.filter((item) => item.isFeatured);
};

// Helper function to get item by ID
export const getItemById = (id: string): Item | undefined => {
    return mockItems.find((item) => item.id === id);
};
