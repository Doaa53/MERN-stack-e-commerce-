import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-new.jpg";
import {
  Flower2,
  Gift,
  Heart,
  PartyPopper,
  Smile,
  Sun,
  TreeDeciduous,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import Footer from "@/components/ui/footer";
import { Link } from "react-router-dom";


const categoriesWithIcon = [
  { id: "birthday", label: "Birthday", icon: PartyPopper },
  { id: "anniversary", label: "Anniversary", icon: Heart },
  { id: "wedding", label: "Wedding", icon: Gift },
  { id: "sympathy", label: "Sympathy", icon: TreeDeciduous },
  { id: "congratulations", label: "Congratulations", icon: Smile },
];

const brandsWithIcon = [
  { id: "roses", label: "Roses", icon: Flower2 },
  { id: "tulips", label: "Tulips", icon: Sun },
  { id: "orchids", label: "Orchids", icon: Flower2 },
  { id: "lilies", label: "Lilies", icon: Flower2 },
  { id: "daisies", label: "Daisies", icon: Flower2 },
  { id: "sunflowers", label: "Sunflowers", icon: Sun },
];

function ShoppingHome() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
  {/* Hero Section */}
  <section className="relative w-full h-[600px] flex items-center justify-start text-white">
    <img
      src={bannerOne}
      alt="Main Banner"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div className="absolute inset-0 bg-black/50 z-0" />
    <div className="relative z-10 max-w-3xl px-8 md:px-16 lg:px-24 text-left">
      <p className="uppercase text-sm md:text-base tracking-widest mb-6 font-medium text-[#E8D3B9]">
        Your Experience Awaits
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-8">
        <span className="text-[#D2B48C]">Fresh Blooms</span> <br />
        <span className="text-white">Delivered with Love</span> <br />
        <span className="text-[#E8D3B9]">Brighten Someone’s Day</span> <br />
        <span className="text-white">Today!</span>
      </h1>
      <Link to="/shop/listing">
  <Button
    variant="ghost"
    className="uppercase px-8 py-3 rounded-md border border-white text-white text-base font-medium hover:bg-[#D2B48C] hover:text-black hover:border-transparent transition-colors duration-300"
  >
    Shop Now
  </Button>
</Link>
    </div>
  </section>




      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Occasion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                key={categoryItem.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flower Types */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Flower Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(brandItem, "brand")
                }
                key={brandItem.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    key={productItem.id}
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />

      <Footer />
    </div>
  );
}

export default ShoppingHome;
