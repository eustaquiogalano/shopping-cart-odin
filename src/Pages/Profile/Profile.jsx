import React from "react";
import { useOutletContext } from "react-router";

function Profile() {
  const { cartListCount } = useOutletContext();

  const user = {
    name: "Juan Dela Cruz",
    email: "juan@email.com",
    phone: "+63 912 345 6789",
    address: "Quezon City, PH",
    cartItems: 0,
    pending: 0,
    wishlist: 0,
  };
  return (
    <main className="p-4">
      <div className="bg-card border border-border rounded-xl p-6 max-w-sm w-full">
        {/* header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-13 h-13 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-sm shrink-0">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <span className="ml-auto text-xs bg-green-100 text-green-700 rounded-full px-3 py-1 font-medium">
            Member
          </span>
        </div>

        {/* stats */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {[
            { label: "Cart Items", value: cartListCount },
            { label: "Pending", value: user.pending },
            { label: "Wishlist", value: user.wishlist },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-secondary rounded-lg p-2 text-center"
            >
              <p className="text-lg font-medium text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* info */}
        <div className="border border-border rounded-lg overflow-hidden mb-5">
          {[
            { label: "Full name", value: user.name },
            { label: "Phone", value: user.phone },
            { label: "Address", value: user.address },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`flex justify-between items-center px-3 py-2 ${i !== arr.length - 1 ? "border-b border-border" : ""}`}
            >
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-xs font-medium text-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* actions */}
        <div className="flex gap-2 pt-4 border-t border-border">
          <button className="flex-1 text-xs font-medium text-foreground bg-secondary border border-border rounded-lg py-2 cursor-pointer">
            Edit profile
          </button>
          <button className="flex-1 text-xs font-medium text-destructive bg-destructive/10 border border-border rounded-lg py-2 cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
