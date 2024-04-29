import React, { useMemo } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  // LineChart,
  // BarChart,
  PieChart,
  // ScatterChart,
  // RadarChart,
  // MapChart,
  // TreeChart,
  // TreemapChart,
  // GraphChart,
  // GaugeChart,
  // FunnelChart,
  // ParallelChart,
  // SankeyChart,
  // BoxplotChart,
  // CandlestickChart,
  // EffectScatterChart,
  // LinesChart,
  // HeatmapChart,
  // PictorialBarChart,
  // ThemeRiverChart,
  // SunburstChart,
  // CustomChart,
} from "echarts/charts";
import {
  // GridSimpleComponent,
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  // DatasetComponent,
} from "echarts/components";
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer,
  // SVGRenderer,
} from "echarts/renderers";
import data from "../../data/data.json";
import { Card } from "react-vant";
import { groupBy } from "lodash";
import { singleFields } from "../../constants";

// Register the required components
echarts.use([TitleComponent, TooltipComponent, PieChart, CanvasRenderer, LegendComponent, ToolboxComponent]);

export default function GenderChart() {
  const genderData = useMemo(() => {
    return Object.entries(groupBy(data, (item: Record<string, string>) => item?.[singleFields.gender])).map(
      ([gender, values]) => ({
        value: values.length,
        name: gender,
      })
    );
  }, []);
  const option = {
    title: {
      show: false,
      text: "本群男女比例图",
      // subtext: '',
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
      top: "bottom",
    },
    toolbox: {
      show: true,
      feature: {
        // magicType: { show: true, type: ["bar"] },
        dataView: { show: true },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    label: {
      alignTo: "edge",
      formatter: "{name|{b}}\n{time|{c} 人}",
      minMargin: 5,
      edgeDistance: 10,
      lineHeight: 15,
      rich: {
        time: {
          fontSize: 10,
          color: "#999",
        },
      },
    },
    labelLine: {
      length: 15,
      length2: 0,
      maxSurfaceAngle: 80,
    },
    series: [
      {
        name: "男女比例",
        type: "pie",
        radius: "50%",
        data: genderData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div style={{ padding: 12 }}>
      <Card round>
        <Card.Header>本群男女比例图</Card.Header>
        <Card.Body>
          <ReactEChartsCore echarts={echarts} option={option} notMerge={true} lazyUpdate={true} />
        </Card.Body>
      </Card>
    </div>
  );
}
