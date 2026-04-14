import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import RegisterForm from "./components/RegisterForm";
import PizzaOrder from "./components/PizzaOrder";

const App = () => {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <Container className="mt-5 text-center">
      {/* 👤 USER BAR */}
      {user && (
        <div className="glass mb-3 p-2 d-flex justify-content-between align-items-center">
          <span>
            👋 Welcome, <strong>{user.name}</strong>
          </span>
          <Button
            size="sm"
            variant="danger"
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
              setPage("register");
            }}
          >
            Logout
          </Button>
        </div>
      )}

      {/* NAV */}

      <div className="mb-4">
        {!user && (
          <Button onClick={() => setPage("register")} className="me-2">
            👤 Register
          </Button>
        )}

        {/* <Button onClick={() => setPage("pizza")}>
          🍕 Pizza
        </Button> */}
        <Button
          onClick={() => {
            if (!user) {
              setMsg("⚠️ Please register first to access Pizza page");

              setTimeout(() => {
                setMsg("");
              }, 3000);

              return;
            }
            setMsg(""); // clear message
            setPage("pizza");
          }}
        >
          🍕 Pizza
        </Button>
        {msg && <div className="text-danger mt-2">{msg}</div>}
      </div>

      {/* PAGE SWITCH */}
      {page === "register" ? (
        <RegisterForm
          onSuccess={() => {
            console.log("Switching page...");
            const savedUser = JSON.parse(localStorage.getItem("user"));
            setUser(savedUser);

            // 🔥 FORCE UPDATE PAGE
            setTimeout(() => {
              setPage("pizza");
            }, 100);
          }}
        />
      ) : (
        <PizzaOrder />
      )}
    </Container>
  );
};

export default App;
