import sqlite3
from sqlite3 import Error


def create_user_database(db_name):
    # Connect to SQLite database
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    
    # Create expenses table
    cursor.execute('''CREATE TABLE expenses (
                        expenseID INTEGER 
                    )''')
    
    # Commit changes and close connection
    conn.commit()
    conn.close()
    print(f"Database '{db_name}' with expenses table created successfully.")

if __name__ == '__main__':
    create_user_database(r"maciek2138.db")