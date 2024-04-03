import { BookCard, Button } from "@/components/common";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookProps } from "@/types/book";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_BOOKS } from "./gql";

export const HomePage = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_BOOKS);

  if (loading) {
    return (
      <h1 className="flex items-center justify-center w-full text-[25px] text-second-color font-medium fixed bottom-8 h-full">
        Loading...
      </h1>
    );
  }

  const topRatingBooks = data?.books?.filter(
    (book: BookProps) => book.rating && book.rating >= 4
  );

  return (
    <>
      <div className="flex items-center justify-between w-full px-[100px] bg-main-color text-white">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-start">
            <p className="text-[150px] font-bold">15% OFF</p>
            <p className="text-[75px]">NONFICTION SALE</p>
          </div>
          <p className="text-[19px] text-center w-[450px]">
            On top of our everyday at least 50% off** list prices... that's a
            whole lot of savings!
          </p>
          <Button
            className="mt-5 border-white hover:bg-white hover:text-main-color"
            onClick={() => navigate("/all-books")}
          >
            Show all books
          </Button>
        </div>
        <div className="w-[650px]">
          <img
            src="/images/main-img.webp"
            alt="main-image"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
      <div className="px-[100px] flex flex-col items-center justify-center my-10">
        <h2 className="text-[50px] mb-10 font-medium text-second-color">
          Top Rating Books Today
        </h2>
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="-ml-1">
            {topRatingBooks?.map((book: BookProps, index: number) => (
              <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
                <BookCard {...book} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-main-color text-white hover:border-main-color hover:bg-white" />
          <CarouselNext className="bg-main-color text-white hover:border-main-color hover:bg-white" />
        </Carousel>
      </div>
    </>
  );
};
