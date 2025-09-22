import { useState, useEffect } from "react";

interface Recipe {
  id: number;
  title: string;
  description: string;
  saved?: boolean; // thêm flag saved
}

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = () => {
    if (!title.trim() || !description.trim()) return;
    const newRecipe: Recipe = {
      id: Date.now(),
      title,
      description,
      saved: false,
    };
    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setDescription("");
  };

  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  const toggleSave = (id: number) => {
    setRecipes(
      recipes.map((r) => (r.id === id ? { ...r, saved: !r.saved } : r))
    );
  };

  const filtered = recipes.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesSaved = showSaved ? r.saved : true;
    return matchesSearch && matchesSaved;
  });

  return (
    <div>
      <h2>Recipes</h2>

      {/* Form thêm công thức */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addRecipe();
        }}
      >
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Bộ lọc */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setShowSaved(!showSaved)}>
          {showSaved ? "Show All" : "Show Saved"}
        </button>
      </div>

      {/* Danh sách công thức */}
      <ul>
        {filtered.map((r) => (
          <li key={r.id} className="recipe-item">
            <div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
            </div>
            <div className="actions">
              <button onClick={() => toggleSave(r.id)}>
                {r.saved ? "Unsave" : "Save"}
              </button>
              <button onClick={() => deleteRecipe(r.id)} className="delete">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
