



export interface HeroProps {
  temp?: number;
  condition?: {
    main: string;
    description: string;
    icon: string;
  };
  wind?: number;
  humidity?: number;
}

export interface InfoProps {
 list?: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    visibility: number;
    pop: number;
    dt_txt: string;
  }>;
    // Add other properties you need
}
