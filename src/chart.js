import {
    Chart,
    BarController,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    PieController, 
    ArcElement,
    PointElement,
    LineElement, 
    Title,
    LineController
  } from 'chart.js';
  
  Chart.register(BarController, 
    CategoryScale, 
    LineController,
    PieController, 
    PointElement, 
    LinearScale, 
    LineElement,
    BarElement, 
    ArcElement,
    Tooltip, 
    Legend, 
    Title , 
  );

    
  