export default function DineoutCard({ v }) {
  const cuisines = v?.info?.cuisines || [];
  const offerHighlight = v?.info?.vendorOffer?.offerHighlights?.[0]?.logoCtx || {};
  const offerInfo = v?.info?.offerInfoV3?.vendorOffer || {};
  const offerLogo = v?.info?.offerInfoV3?.offerLogo || {};
  const customerOffer = v?.info?.customerOffer?.infos?.[0] || {};
  const couponOffer = v?.info?.offerInfoV3?.couponOffer || {};

  return (
    <a
      href={v.cta.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 min-w-[280px] sm:min-w-[300px] max-w-[327px] bg-white border border-gray-100"
      aria-label={`View details for ${v?.info?.name}`}
    >
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-40 sm:h-48 object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${v?.info?.mediaFiles?.[0]?.url}`}
          alt={v?.info?.name}
          loading="lazy"
        />
        <div className="absolute bottom-1 flex justify-between w-full px-3 text-base sm:text-[19px] font-semibold text-white z-10">
          <p className="truncate max-w-[70%]" title={v?.info?.name}>
            {v?.info?.name}
          </p>
          <p className="flex items-center gap-1">
            <svg
              className="w-5 h-5 fill-amber-400"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
            </svg>
            {v?.info?.rating?.value}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Details */}
      <div className="p-4">
        {/* Title & Price */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <div
              className="font-semibold text-base sm:text-lg truncate max-w-[60%] text-gray-800"
              title={cuisines.join(" • ")}
            >
              {cuisines.slice(0, 2).join(" • ")}
            </div>
            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded text-xs sm:text-sm whitespace-nowrap font-medium">
              {v?.info?.costForTwo}
            </div>
          </div>
          <div className="flex justify-between text-gray-500 text-xs sm:text-sm">
            <div
              className="w-[70%] sm:w-[80%] overflow-hidden truncate"
              title={v?.info?.locationInfo?.formattedAddress}
            >
              {v?.info?.locationInfo?.formattedAddress}
            </div>
            <div className="whitespace-nowrap">{v?.info?.locationInfo?.distanceString}</div>
          </div>
        </div>

        {/* Highlight Offer */}
        {offerHighlight.logo && (
          <div className="flex items-center gap-2 mb-4 p-2 bg-orange-50 border border-orange-200 rounded">
            <img
              className="w-5 h-5"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${offerHighlight.logo}`}
              alt="Offer logo"
              loading="lazy"
            />
            <p className="text-xs sm:text-sm font-medium truncate text-orange-700">{offerHighlight.text}</p>
          </div>
        )}

        {/* Main Offer */}
        {(offerLogo.logo || offerInfo.title) && (
          <div className="mb-4 flex justify-between items-center bg-orange-500 px-3 py-2 text-white rounded-sm">
            <div className="flex items-center gap-2 max-w-[70%] sm:max-w-none truncate">
              {offerLogo.logo && (
                <img
                  className="w-5 h-5"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${offerLogo.logo}`}
                  alt="Offer logo"
                  loading="lazy"
                />
              )}
              <p className="text-sm font-semibold truncate" title={`${offerInfo.title} ${offerInfo.subtitle}`}>
                {offerInfo.title} {offerInfo.subtitle}
              </p>
            </div>
            <p className="text-xs sm:text-sm whitespace-nowrap">{offerInfo.subtext}</p>
          </div>
        )}

        {/* Customer Offer */}
        {customerOffer.description && (
          <p
            className="mb-2 bg-amber-50 border border-amber-200 text-amber-800 py-1 px-2 rounded-sm text-xs sm:text-sm truncate"
            title={customerOffer.description}
          >
            {customerOffer.description}
          </p>
        )}

        {/* Coupon Offer */}
        {couponOffer.title && (
          <p
            className="text-xs sm:text-sm text-orange-600 font-medium truncate"
            title={couponOffer.title}
          >
            {couponOffer.title}
          </p>
        )}
      </div>
    </a>
  );
}
