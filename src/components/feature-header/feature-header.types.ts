interface IFeatureHeaderProps {
  title: string;
  rightText?: string;
  iconName?: string;
  iconColor: string;
  iconSize?: number;
  iconGap?: number;

  onPressAction?(): void;
}

export type { IFeatureHeaderProps };
