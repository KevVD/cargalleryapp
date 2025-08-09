# Car Sales Landing Page

A responsive React-based car sales landing page built with Next.js and TailwindCSS. This application showcases a professional car dealership interface with advanced filtering, modal interactions, and responsive design.

## 🚗 Features

### Core Functionality
- **Responsive Grid Layout**: Displays 4 cars in an adaptive grid (1 column on mobile, 2 on tablet, 4 on desktop)
- **Car Cards**: Each card includes brand/model, price, location, thumbnail images, and action button
- **Interactive Modals**: 
  - Car detail modal with image gallery and navigation
  - Contact form modal for viewing requests
- **Live Search**: Real-time filtering by brand, model, or location
- **Image Gallery**: 4-view car images (front, back, left, right) with navigation

### Technical Features
- **React Functional Components**: Modern React with hooks
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Local Data**: Car information stored in TypeScript data file
- **Modal Management**: Proper modal state handling and accessibility
- **Form Handling**: Contact form with validation and success states

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Images**: Next.js Image component with placeholder service

## 📱 Responsive Breakpoints

- **Mobile**: 1 column grid (< 640px)
- **Tablet**: 2 column grid (640px - 1024px)
- **Desktop**: 4 column grid (> 1024px)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd car-sales-landing
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── CarCard.tsx         # Individual car card component
│   ├── CarModal.tsx        # Car details modal
│   ├── ContactModal.tsx    # Contact form modal
│   └── SearchBar.tsx       # Search functionality
└── lib/
    └── carData.ts          # Car data and types
\`\`\`

## 🎨 Design Features

### Visual Design
- Clean, professional interface
- Consistent color scheme with blue primary colors
- Smooth hover effects and transitions
- Card-based layout with subtle shadows
- Professional typography hierarchy

### User Experience
- Intuitive navigation and interactions
- Loading states and form feedback
- Accessible modal dialogs
- Mobile-optimized touch targets
- Clear call-to-action buttons

## 📊 Car Data Structure

Each car object includes:
- Unique ID
- Brand and model
- Price (formatted with locale)
- Location
- 4 images (front, back, left, right views)
- Detailed description

## 🔧 Customization

### Adding New Cars
Edit \`src/lib/carData.ts\` to add new car entries:

\`\`\`typescript
{
  id: 'unique-id',
  brand: 'Brand Name',
  model: 'Model Name',
  price: 30000,
  location: 'City, Country',
  images: {
    front: 'image-url',
    back: 'image-url',
    left: 'image-url',
    right: 'image-url'
  },
  description: 'Detailed description...'
}
\`\`\`

### Styling Modifications
- Colors: Update Tailwind classes throughout components
- Layout: Modify grid classes in main page component
- Typography: Adjust text classes for different font sizes/weights

## 🧪 Testing Considerations

This application is designed as a front-end coding test demonstration and includes:
- Clean, readable code structure
- Proper TypeScript typing
- Responsive design implementation
- Modern React patterns
- Professional UI/UX design

## 📈 Performance Optimizations

- Next.js Image component for optimized image loading
- Client-side filtering for instant search results
- Efficient state management with React hooks
- Minimal re-renders through proper component structure

## 🔮 Future Enhancements

Potential improvements for a production version:
- Backend API integration
- Real image uploads and management
- User authentication
- Favorites/wishlist functionality
- Advanced filtering (price range, year, etc.)
- Pagination for large datasets
- SEO optimization
- Analytics integration

## 📄 License

This project is created for demonstration purposes as part of a coding test.
\`\`\`
