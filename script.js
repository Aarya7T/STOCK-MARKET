document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links li');
  const pages = document.querySelectorAll('.page-content');

  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetPage = this.getAttribute('data-page');
          
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
          
          pages.forEach(page => {
              page.classList.remove('active');
              if (page.id === targetPage) {
                  page.classList.add('active');
              }
          });
      });
  });

  const userInfoDropdown = document.getElementById('userInfoDropdown');
  const profileDropdown = document.getElementById('profileDropdown');

  userInfoDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
  });

  document.addEventListener('click', function(e) {
      if (!userInfoDropdown.contains(e.target)) {
          profileDropdown.classList.remove('show');
      }
  });

  profileDropdown.querySelectorAll('a').forEach(item => {
      item.addEventListener('click', function(e) {
          e.preventDefault();
          const action = this.getAttribute('href').substring(1);
          showNotification('info', `${action.charAt(0).toUpperCase() + action.slice(1)} action triggered`);
          profileDropdown.classList.remove('show');
      });
  });

  const chartOptions = {
      chart: {
          type: 'area',
          height: 350,
          animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 800,
              animateGradually: {
                  enabled: true,
                  delay: 150
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 350
              }
          },
          toolbar: {
              show: false
          },
          background: 'transparent'
      },
      colors: ['#4a00e0', '#8e2de2', '#00fff0'],
      fill: {
          type: 'gradient',
          gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100]
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth',
          width: 3
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
              style: {
                  colors: '#b3b3b3'
              }
          }
      },
      yaxis: {
          labels: {
              style: {
                  colors: '#b3b3b3'
              }
          }
      },
      tooltip: {
          theme: 'dark'
      },
      grid: {
          borderColor: 'rgba(255, 255, 255, 0.1)'
      }
  };

  const salesChart = new ApexCharts(document.querySelector("#salesChart"), {
      ...chartOptions,
      series: [{
          name: 'Price',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 200, 190]
      }]
  });
  salesChart.render();

  const userGrowthChart = new ApexCharts(document.querySelector("#userGrowthChart"), {
      ...chartOptions,
      series: [{
          name: 'Price',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 160, 170, 180]
      }]
  });
  userGrowthChart.render();

  const trafficSourcesChart = new ApexCharts(document.querySelector("#trafficSourcesChart"), {
      ...chartOptions,
      chart: {
          ...chartOptions.chart,
          type: 'pie'
      },
      labels: ['HAL', 'HCL', 'COCHINSHIP', 'HDFCAMC', 'BDL'],
      series: [30, 40, 15, 10, 5]
  });
  trafficSourcesChart.render();

  const conversionRatesChart = new ApexCharts(document.querySelector("#conversionRatesChart"), {
      ...chartOptions,
      chart: {
          ...chartOptions.chart,
          type: 'bar'
      },
      series: [{
          name: 'Conversion Rate',
          data: [2.3, 3.1, 4.0, 3.8, 5.1, 5.9, 4.5]
      }],
      xaxis: {
          categories: ['Landing Page', 'Product Page', 'Checkout', 'Thank You', 'Category Page', 'Search Results', 'Blog Post']
      }
  });
  conversionRatesChart.render();

  const monthlySalesChart = new ApexCharts(document.querySelector("#monthlySalesChart"), {
      ...chartOptions,
      series: [{
          name: 'NAV',
          data: [110, 130, 150, 140, 160, 150, 140, 160, 170, 180, 170, 190]
      }]
  });
  monthlySalesChart.render();

  const salesByCategoryChart = new ApexCharts(document.querySelector("#salesByCategoryChart"), {
      ...chartOptions,
      chart: {
          ...chartOptions.chart,
          type: 'donut'
      },
      labels: ['HDFC Small Cap', 'Quant Small Cap', 'SBI Contre', 'HDFC Mid Cap', 'SBI PSU Fund'],
      series: [234567,198765,176543,154321,143210]
  });
  salesByCategoryChart.render();

  const customerAcquisitionChart = new ApexCharts(document.querySelector("#customerAcquisitionChart"), {
      ...chartOptions,
      series: [{
          name: 'IN %',
          data: [30, 40, 30, 20, 25, 21, 29, 35, 40]
      }]
  });
  customerAcquisitionChart.render();

  const customerSatisfactionChart = new ApexCharts(document.querySelector("#customerSatisfactionChart"), {
      ...chartOptions,
      chart: {
          ...chartOptions.chart,
          type: 'radar'
      },
      series: [{
          name: 'Return in %',
          data: [19, 50, 29, 24, 35, 40]
      }],
      xaxis: {
          categories: ['Nifty50', 'Midcpnifty', 'Sensex', 'Bankex', 'Banknifty','Algo']
      }
  });
  customerSatisfactionChart.render();

  const stockLevelsChart = new ApexCharts(document.querySelector("#stockLevelsChart"), {
      ...chartOptions,
      chart: {
          ...chartOptions.chart,
          type: 'bar'
      },
      series: [{
          name: 'Current Stock',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
          name: 'Reorder Level',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      xaxis: {
          categories: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G', 'Product H', 'Product I']
      }
  });
  stockLevelsChart.render();

  const productTurnoverChart = new ApexCharts(document.querySelector("#productTurnoverChart"), {
      ...chartOptions,
      series: [{
          name: 'Turnover Rate',
          data: [2.3, 3.1, 4.0, 3.8, 5.1, 5.9, 4.5, 3.9, 4.2]
      }],
      xaxis: {
          categories: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G', 'Product H', 'Product I']
      }
  });
  productTurnoverChart.render();

  const recentOrders = [
      { id: '1234', customer: 'GAEL', product: 'MID CAP', amount: '142.90', status: '12%' },
      { id: '1235', customer: 'BDL', product: 'MID CAP', amount: '1168.90', status: '8%' },
      { id: '1236', customer: 'HDFC AMC', product: 'LARGE CAP', amount: '4375.10', status: '5.5%' },
      { id: '1237', customer: 'JIOFIN', product: 'SMALL CAP', amount: '341.80', status: '5%' },
      { id: '1238', customer: 'BAJAJHFL', product: 'MID CAP', amount: '150.89', status: '3%' }
  ];

  const topProducts = [
      { product: 'MAHABANK', price: 'MID CAP', sold: 100.50, revenue: '-10%' },
      { product: 'PAYTM', price: 'LARGE CAP', sold: 760.90, revenue: '-9.3%' },
      { product: 'IDEA', price: 'SMALL CAP', sold: 10.10, revenue: '-8.8%' },
      { product: 'JP', price: 'MICRO CAP', sold: 40.50, revenue: '-5.5%' },
      { product: 'ITC', price: 'LARGE CAP', sold: 350.40, revenue: '-3%' }
  ];

  const topPages = [
      { page: 'HAL', views: '5439', visitors: 'Defence', avgTime: '45%' },
      { page: 'HCL', views: '985', visitors: 'IT', avgTime: '17%' },
      { page: 'COCHINSHIP', views: '1794', visitors: 'Defence', avgTime: '85%' },
      { page: 'HDFCAMC', views: '4732', visitors: 'NBFC', avgTime: '27%' },
      { page: 'BDL', views: '2469', visitors: 'Defence', avgTime: '19%' }
  ];

  const salesReps = [
      { name: 'HDFC Small Cap', sales: '234,567', deals: 45, score: 70 },
      { name: 'Quant Samll Cap', sales: '198,765', deals: 38, score: 88 },
      { name: 'SBI Contra', sales: '176,543', deals: 35, score: 85 },
      { name: 'HDFC Mid Cap', sales: '154,321', deals: 30, score: 82 },
      { name: 'SBI PSU Fund', sales: '143,210', deals: 28, score: 79 }
  ];

  const topCustomers = [
      { name: 'Acme Corp', spent: '54,321', orders: 23, lastOrder: '2023-09-15' },
      { name: 'Global Industries', spent: '43,210', orders: 19, lastOrder: '2023-09-12' },
      { name: 'Tech Solutions', spent: '32,109', orders: 15, lastOrder: '2023-09-10' },
      { name: 'Innovative Systems', spent: '21,098', orders: 12, lastOrder: '2023-09-08' },
      { name: 'Prime Services', spent: '19,876', orders: 10, lastOrder: '2023-09-05' }
  ];

  const lowStock = [
      { product: 'Wireless Mouse', stock: 15, reorder: 20, supplier: 'Tech Supplies Inc.' },
      { product: 'USB-C Cable', stock: 8, reorder: 25, supplier: 'Cable Masters' },
      { product: 'Laptop Stand', stock: 5, reorder: 15, supplier: 'Ergonomic Solutions' },
      { product: 'Webcam', stock: 3, reorder: 10, supplier: 'Vision Tech' },
      { product: 'Bluetooth Speaker', stock: 7, reorder: 12, supplier: 'Audio Experts' }
  ];

  function populateTable(tableId, data) {
      const tableBody = document.getElementById(tableId);
      tableBody.innerHTML = '';
      data.forEach(item => {
          const row = document.createElement('tr');
          Object.values(item).forEach(value => {
              const cell = document.createElement('td');
              cell.textContent = value;
              row.appendChild(cell);
          });
          tableBody.appendChild(row);
      });
  }

  populateTable('recentOrdersBody', recentOrders);
  populateTable('topProductsBody', topProducts);
  populateTable('topPagesBody', topPages);
  populateTable('salesRepBody', salesReps);
  populateTable('topCustomersBody', topCustomers);
  populateTable('lowStockBody', lowStock);

  setInterval(() => {
  const charts = [salesChart, userGrowthChart, trafficSourcesChart,
      conversionRatesChart, monthlySalesChart, salesByCategoryChart,
      customerAcquisitionChart, customerSatisfactionChart, stockLevelsChart,
      productTurnoverChart];
  
  const randomChart = charts[Math.floor(Math.random() * charts.length)];
  
  if (randomChart && randomChart.config && randomChart.config.chart) {
      if (randomChart.config.chart.type === 'pie' || randomChart.config.chart.type === 'donut') {
          randomChart.updateSeries(randomChart.w.globals.series.map(val => val + Math.floor(Math.random() * 10) - 5));
      } else {
          randomChart.updateSeries([{
              data: randomChart.w.globals.series[0].data.map(val => val + Math.floor(Math.random() * 10) - 5)
          }]);
      }
  }
}, 5000);

  document.getElementById('accountSettingsForm').addEventListener('submit', function(e) {
      e.preventDefault();
      showNotification('success', 'Account settings updated successfully!');
  });

  document.getElementById('notificationSettingsForm').addEventListener('submit', function(e) {
      e.preventDefault();
      showNotification('success', 'Notification preferences updated successfully!');
  });

  document.querySelector('.search-bar input').addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
          const searchTerm = this.value.toLowerCase();
          showNotification('info', `Search results for: ${searchTerm}`);
      }
  });

  const notificationContainer = document.getElementById('notificationContainer');

  function showNotification(type, message, duration = 5000) {
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      
      const iconMap = {
          success: '<i class="fas fa-check-circle"></i>',
          warning: '<i class="fas fa-exclamation-triangle"></i>',
          info: '<i class="fas fa-info-circle"></i>',
          error: '<i class="fas fa-times-circle"></i>'
      };

      notification.innerHTML = `
          <div class="notification-header">
              <span class="notification-title">
                  <span class="notification-icon">${iconMap[type]}</span>
                  ${type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
              <button class="notification-close">&times;</button>
          </div>
          <div class="notification-body">${message}</div>
          <div class="notification-progress">
              <div class="notification-progress-bar"></div>
          </div>
      `;

      notificationContainer.appendChild(notification);

      setTimeout(() => notification.classList.add('show'), 10);

      const progressBar = notification.querySelector('.notification-progress-bar');
      let width = 100;
      const interval = setInterval(() => {
          width -= 100 / (duration / 100);
          progressBar.style.width = `${width}%`;
          if (width <= 0) {
              clearInterval(interval);
              hideNotification(notification);
          }
      }, 100);

      notification.querySelector('.notification-close').addEventListener('click', () => {
          clearInterval(interval);
          hideNotification(notification);
      });

      function hideNotification(notification) {
          notification.classList.remove('show');
          setTimeout(() => notification.remove(), 300);
      }
  }
});