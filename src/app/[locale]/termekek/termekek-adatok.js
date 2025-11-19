// Data factory for products. Do NOT call React hooks at module scope.
export const SLUGS = ["1-modulos-ablak", "2-modulos-ablak", "4-modulos-ablak"];

export function getPreviewTermekek(dict) {
  return {
    "1-modulos-ablak": {
      id: 1,
      slug: "1-modulos-ablak",
      image: "/S.jpg",
      title: dict.products.S.name,
      description: dict.products.S.subtitle,
      details: [
        dict.products.S.list_preview_bullets[0],
        dict.products.S.list_preview_bullets[1],
        dict.products.S.list_preview_bullets[2],
        dict.products.S.list_preview_bullets[3],
        dict.products.S.list_preview_bullets[4],
      ],
      button: dict.common_values.details_button,
    },
    "2-modulos-ablak": {
      id: 2,
      slug: "2-modulos-ablak",
      image: "/M.jpg",
      title: dict.products.M.name,
      description: dict.products.M.subtitle,
      details: [
        dict.products.M.list_preview_bullets[0],
        dict.products.M.list_preview_bullets[1],
        dict.products.M.list_preview_bullets[2],
        dict.products.M.list_preview_bullets[3],
        dict.products.M.list_preview_bullets[4],
      ],
      button: dict.common_values.details_button,
    },
    "4-modulos-ablak": {
      id: 3,
      slug: "4-modulos-ablak",
      image: "/L.jpg",
      title: dict.products.L.name,
      description: dict.products.L.subtitle,
      details: [
        dict.products.L.list_preview_bullets[0],
        dict.products.L.list_preview_bullets[1],
        dict.products.L.list_preview_bullets[2],
        dict.products.L.list_preview_bullets[3],
        dict.products.L.list_preview_bullets[4],
      ],
      button: dict.common_values.details_button,
    },
  };
}
