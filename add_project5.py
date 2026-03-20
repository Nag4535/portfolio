with open('src/App.jsx', 'r') as f:
    lines = f.readlines()

project5 = '''  ,{
    id: 5, num: "05",
    title: "Customer 360 Intelligence Platform",
    tag: "ML · DL · ETL", year: "2025",
    accent: "#2ED573",
    link: "https://customer360-intelligence-mf9fuabtqg9drmdsnwqnbd.streamlit.app/",
    desc: "End-to-end customer analytics on Instacart dataset — 206,209 customers, 33M+ orders, 49,688 products. ETL pipeline, RFM segmentation (7 tiers), Gradient Boosting churn prediction (ROC-AUC 0.7895), PyTorch Neural Network, and 5-page Streamlit dashboard.",
    tech: ["Python", "XGBoost", "PyTorch", "Streamlit", "SQLite", "Scikit-learn", "Plotly"],
    highlights: [
      { label: "Customers", value: "206K"     },
      { label: "Orders",    value: "33M+"     },
      { label: "ROC-AUC",   value: "0.7895"   },
      { label: "Live Demo", value: "Deployed" },
    ],
    modal: {
      overview: "End-to-end Customer 360 Intelligence Platform built on the real Instacart dataset — 206,209 customers, 33M+ order records, and 49,688 products across 21 departments. Covers ETL, EDA, RFM segmentation, ML churn prediction, Deep Learning, and a deployed 5-page Streamlit dashboard. Live demo uses 30K sample — full dataset on GitHub.",
      dashboards: [
        { name: "ETL Pipeline", desc: "Automated pipeline joining 6 Instacart CSV files into SQLite database. Feature engineering: day_name, time_of_day, ShippingDays, SalesBand. Master table: 33M+ rows." },
        { name: "EDA Key Findings", desc: "206,209 users, avg 16.6 orders/user, 58.97% reorder rate, Produce #1 department, Banana #1 product with 491,291 orders, peak ordering Saturday 10am." },
        { name: "RFM Segmentation", desc: "7-tier segmentation: Champions, Loyal, Promising, New Customer, At Risk, Cannot Lose, Lost. Based on Recency and Frequency scores." },
        { name: "Churn Prediction ML", desc: "Gradient Boosting won ROC-AUC 0.7895 vs XGBoost 0.7871, Logistic Regression 0.7851, Random Forest 0.7693. Churn rate 49.22%." },
        { name: "Deep Learning", desc: "PyTorch Neural Network 4 layers (128-64-32-1), BatchNorm, Dropout, Adam optimizer, 50 epochs. Compared vs Gradient Boosting." },
        { name: "Streamlit Dashboard", desc: "5 pages: Overview KPIs, RFM Segments, Churn Analysis with high-risk table, Product Intelligence, Customer Lookup with gauge chart." },
      ],
      stats: [
        { label: "Customers", value: "206,209"   },
        { label: "Orders",    value: "33M+"       },
        { label: "Products",  value: "49,688"     },
        { label: "Churn AUC", value: "0.7895"     },
        { label: "Segments",  value: "7 Tiers"    },
        { label: "Notebooks", value: "5 Complete" },
      ],
    },
  }
'''

# Insert before line 165 (index 164)
lines.insert(164, project5)

with open('src/App.jsx', 'w') as f:
    f.writelines(lines)
print("SUCCESS")
