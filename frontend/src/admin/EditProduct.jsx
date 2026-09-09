import { useEffect, useState } from "react";
import api from "../api/axios.js";
import { useNavigate, useParams } from "react-router";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const allowedFields = [
    "title",
    "description",
    "price",
    "category",
    "image",
    "stock",
  ];

  const loadProduct = async () => {
    try {
      const res = await api.get("/products");

      const product = res.data.find(
        (p) => p._id === id
      );

      if (!product) {
        alert("Product not found!");
        return;
      }

      setForm({
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
        category: product.category || "",
        image: product.image || "",
        stock: product.stock || "",
      });
    } catch (error) {
      console.error("Error loading product:", error);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/products/update/${id}`, form);

      alert("Product updated successfully!");

      navigate("/admin/products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-6">
        Edit Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {allowedFields.map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            className="w-full p-2 border border-gray-200 rounded"
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 p-2 hover:bg-blue-600 text-white cursor-pointer"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}