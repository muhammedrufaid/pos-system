import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [counts, setCounts] = useState({}); // { itemId: count }

  const increment = (id) => {
    setCounts((prev) => {
      const current = prev[id] || 0;
      if (current >= 4) return prev;

      return {
        ...prev,
        [id]: current + 1,
      };
    });
  };

  const decrement = (id) => {
    setCounts((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;

      return {
        ...prev,
        [id]: current - 1,
      };
    });
  };

  return (
    <>
      {/* MENU CATEGORIES */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
            style={{ backgroundColor: menu.bgColor }}
            onClick={() => {
              setSelected(menu);
              setCounts({}); // reset item counts when category changes
            }}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.icon} {menu.name}
              </h1>

              {selected.id === menu.id && (
                <GrRadialSelected className="text-white" size={20} />
              )}
            </div>

            <p className="text-[#ababab] text-sm font-semibold">
              {menu.items.length} items
            </p>
          </div>
        ))}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      {/* MENU ITEMS */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
        {selected?.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] bg-[#1a1a1a] cursor-pointer hover:bg-[#2a2a2a]"
          >
            <h1 className="text-[#f5f5f5] text-lg font-semibold">
              {item.name}
            </h1>

            <div className="flex items-center justify-between w-full">
              <p className="text-[#f5f5f5] text-xl font-bold">
                {item.price} AED
              </p>

              <div className="flex items-center justify-between rounded-lg px-3 gap-2 bg-[#1f1f1f]">
                <button
                  onClick={() => decrement(item.id)}
                  className="text-yellow-500 text-2xl"
                >
                  &minus;
                </button>

                <span className="text-white">
                  {counts[item.id] || 0}
                </span>

                <button
                  onClick={() => increment(item.id)}
                  className="text-yellow-500 text-2xl"
                >
                  &#43;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuContainer;
