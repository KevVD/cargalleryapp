export interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
  location: string;
  images: {
    front: string;
    back: string;
    left: string;
    right: string;
  };
  description: string;
}

export const carData: Car[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Camry",
    price: 22648,
    location: "Lagos, Nigeria",
    images: {
      front:
        "https://platform.cstatic-images.com/xlarge/in/v2/8eeaf4e2-f1ce-5f40-8a55-8ae6bfec8a03/aad05664-b05b-4f57-bc17-4518d19276cb/MqXxnpjlH6VRt2NqmqoEuQ1Ezvw.jpg",
      back: "https://platform.cstatic-images.com/xlarge/in/v2/8eeaf4e2-f1ce-5f40-8a55-8ae6bfec8a03/aad05664-b05b-4f57-bc17-4518d19276cb/euLPC6W_Z_Hp3r2cZXma2oO0bHI.jpg",
      left: "https://platform.cstatic-images.com/xlarge/in/v2/8eeaf4e2-f1ce-5f40-8a55-8ae6bfec8a03/aad05664-b05b-4f57-bc17-4518d19276cb/gwWZQy9GDxe3A7fGNiTaNfUAbRw.jpg",
      right:
        "https://platform.cstatic-images.com/xlarge/in/v2/8eeaf4e2-f1ce-5f40-8a55-8ae6bfec8a03/aad05664-b05b-4f57-bc17-4518d19276cb/HOH_XWVVVxaebi87QdYSmdw-yaw.jpg",
    },
    description:
      "A reliable and fuel-efficient 2023 Toyota Camry SE perfect for daily commuting. This 2023 Toyota Camry SE features a spacious interior, advanced safety features, and excellent resale value. Well-maintained with full service history.",
  },
  {
    id: "2",
    brand: "Honda",
    model: "Accord",
    price: 20790,
    location: "Abuja, Nigeria",
    images: {
      front:
        "https://platform.cstatic-images.com/xlarge/in/v2/a1cc01ba-7a0c-5f23-811a-9d09826468e4/88832a93-accf-496b-87e3-665268eae974/xBDWj-6k_86fTmQsgipSDoY82gs.jpg",
      back: "https://platform.cstatic-images.com/xlarge/in/v2/a1cc01ba-7a0c-5f23-811a-9d09826468e4/88832a93-accf-496b-87e3-665268eae974/x4X4WWPXZrDyeRsp33RkpJlYumY.jpg",
      left: "https://platform.cstatic-images.com/xlarge/in/v2/a1cc01ba-7a0c-5f23-811a-9d09826468e4/88832a93-accf-496b-87e3-665268eae974/CCvudDFn_wHaJbdcsdZxsYRbhyA.jpg",
      right:
        "https://platform.cstatic-images.com/xlarge/in/v2/a1cc01ba-7a0c-5f23-811a-9d09826468e4/88832a93-accf-496b-87e3-665268eae974/JowW7aapxMGFftFEFSFVJhwadVQ.jpg",
    },
    description:
      "2018 Honda Civic Sport Touring with exceptional comfort and performance. Features leather seats, sunroof, and advanced infotainment system. Low mileage and excellent condition throughout.",
  },
  {
    id: "3",
    brand: "BMW",
    model: "X5",
    price: 84765,
    location: "Port Harcourt, Nigeria",
    images: {
      front:
        "https://platform.cstatic-images.com/xlarge/in/v2/01b3cad8-a181-586d-a39f-056ed6232899/f66621f0-ebfe-455a-acf9-35bdef4e5d46/nmf4MgYdRtB6gby3964axXdo2Jg.jpg",
      back: "https://platform.cstatic-images.com/xlarge/in/v2/01b3cad8-a181-586d-a39f-056ed6232899/f66621f0-ebfe-455a-acf9-35bdef4e5d46/E6tHFCm3dkW23RiY1nhegGhF5GA.jpg",
      left: "https://platform.cstatic-images.com/xlarge/in/v2/01b3cad8-a181-586d-a39f-056ed6232899/f66621f0-ebfe-455a-acf9-35bdef4e5d46/aUriv-UKbZmuhJVp8TubFU2wuz8.jpg",
      right:
        "https://platform.cstatic-images.com/xlarge/in/v2/01b3cad8-a181-586d-a39f-056ed6232899/f66621f0-ebfe-455a-acf9-35bdef4e5d46/tM4anR0iH4otvHp9NMkazyr7Pmo.jpg",
    },
    description:
      "Luxury 2024 BMW X5 M60i with powerful performance and premium features. All-wheel drive, premium sound system, and panoramic sunroof. Perfect for both city driving and weekend adventures.",
  },
  {
    id: "4",
    brand: "Mercedes-Benz",
    model: "C-Class",
    price: 58205,
    location: "Kano, Nigeria",
    images: {
      front:
        "https://platform.cstatic-images.com/xlarge/in/v2/177e93e2-7905-5922-851f-2f030bf43e5d/b7344485-38c0-4cc5-b7b8-3cad32344a9b/iKfo19fWwGeQLsESV6zPgJfYkpo.jpg",
      back: "https://platform.cstatic-images.com/xlarge/in/v2/177e93e2-7905-5922-851f-2f030bf43e5d/b7344485-38c0-4cc5-b7b8-3cad32344a9b/Qs7k5_R8r7NIcbKS9pVnlqHxYvk.jpg",
      left: "https://platform.cstatic-images.com/xlarge/in/v2/177e93e2-7905-5922-851f-2f030bf43e5d/b7344485-38c0-4cc5-b7b8-3cad32344a9b/kmRZTcbxQeumi7oTTCNULmOKRsQ.jpg",
      right:
        "https://platform.cstatic-images.com/xlarge/in/v2/177e93e2-7905-5922-851f-2f030bf43e5d/b7344485-38c0-4cc5-b7b8-3cad32344a9b/MdZvwBBamHgLH4QKS422Xbc00vs.jpg",
    },
    description: "Elegant luxury 2025 Mercedes-Benz GLC 300 4MATIC",
  },
];
