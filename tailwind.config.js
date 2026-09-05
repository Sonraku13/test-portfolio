module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      fontFamily: {
        "ryeisland-com-inter-medium-upper":
          "var(--ryeisland-com-inter-medium-upper-font-family)",
        "ryeisland-com-inter-regular-upper":
          "var(--ryeisland-com-inter-regular-upper-font-family)",
        "ryeisland-com-manrope-bold":
          "var(--ryeisland-com-manrope-bold-font-family)",
        "ryeisland-com-manrope-bold-upper":
          "var(--ryeisland-com-manrope-bold-upper-font-family)",
        "ryeisland-com-manrope-medium-title":
          "var(--ryeisland-com-manrope-medium-title-font-family)",
        "ryeisland-com-manrope-medium-upper":
          "var(--ryeisland-com-manrope-medium-upper-font-family)",
        "ryeisland-com-manrope-regular":
          "var(--ryeisland-com-manrope-regular-font-family)",
        "ryeisland-com-manrope-regular-upper":
          "var(--ryeisland-com-manrope-regular-upper-font-family)",
        "ryeisland-com-manrope-semibold-upper":
          "var(--ryeisland-com-manrope-semibold-upper-font-family)",
      },
    },
  },
  plugins: [],
};
