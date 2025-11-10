import './App.css';

function App() {
  // Sample data for tables
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator' },
  ];
  
  const products = [
    { id: 1, name: 'Laptop', price: '$999', category: 'Electronics' },
    { id: 2, name: 'Book', price: '$29', category: 'Education' },
    { id: 3, name: 'Chair', price: '$149', category: 'Furniture' },
  ];

  const addresses = [
    { id: 1, employee: 'John Doe', street: '123 Main St', city: 'New York', zip: '10001' },
    { id: 2, employee: 'Jane Smith', street: '456 Oak Ave', city: 'Los Angeles', zip: '90210' },
    { id: 3, employee: 'Bob Johnson', street: '789 Pine Rd', city: 'Chicago', zip: '60601' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>test successful!</h1>
        <p>CI/CD Pipeline Working Perfectly</p>
        
        <div style={{ marginTop: '30px', textAlign: 'left', maxWidth: '800px', margin: '30px auto', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px' }}>
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Users Table</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>ID</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Email</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{user.id}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{user.name}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{user.email}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <h2 style={{ color: 'white', textAlign: 'center', margin: '30px 0 20px 0' }}>Products Table</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>ID</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Product</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Price</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{product.id}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{product.name}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{product.price}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ color: 'white', textAlign: 'center', margin: '30px 0 20px 0' }}>Employee Address Table</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>ID</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Employee</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>Street</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>City</th>
                <th style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>ZIP</th>
              </tr>
            </thead>
            <tbody>
              {addresses.map(address => (
                <tr key={address.id}>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{address.id}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{address.employee}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{address.street}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{address.city}</td>
                  <td style={{ padding: '10px', border: '1px solid rgba(255, 255, 255, 0.3)' }}>{address.zip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
