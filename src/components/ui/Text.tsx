import { Link } from 'wouter'
import {
  TDropShadow,
  TGradientColorStops,
  TTextColor,
  alignItems,
  backgroundClip,
  backgroundImage,
  caretColor,
  classnames,
  display,
  dropShadow,
  fontFamily,
  fontSize,
  fontWeight,
  gradientColorStops,
  lineHeight,
  placeholderColor,
  textAlign,
  textColor,
  textDecoration,
  transitionProperty,
  whitespace,
  width,
  wordBreak,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'
import classNamesToString from 'helpers/classNamesToString'

const accentText = (
  color: TTextColor,
  bold?: boolean,
  small?: boolean,
  primary?: boolean,
  shadow?: TDropShadow,
  extraSmall?: boolean
) =>
  classnames(
    textColor(
      color === 'text-primary-semi-dimmed'
        ? { 'selection:text-primary': true, 'text-primary-semi-dimmed': true }
        : color
    ),
    fontFamily(primary ? 'font-primary' : undefined),
    fontWeight(bold ? 'font-bold' : 'font-normal'),
    fontSize({
      'text-sm': small,
      'text-xs': extraSmall,
    }),
    dropShadow(shadow)
  )
export function AccentText({
  color,
  bold,
  small,
  primary,
  shadow,
  children,
  extraSmall,
}: ChildrenProp & {
  color: TTextColor
  bold?: boolean
  small?: boolean
  primary?: boolean
  shadow?: TDropShadow
  extraSmall?: boolean
}) {
  return (
    <span
      className={accentText(color, bold, small, primary, shadow, extraSmall)}
    >
      {children}
    </span>
  )
}

const linkText = (
  small?: boolean,
  extraSmall?: boolean,
  bold?: boolean,
  gradientFrom?: TGradientColorStops,
  gradientTo?: TGradientColorStops,
  underline?: boolean
) =>
  classnames(
    textDecoration({ underline }),
    textColor(gradientFrom && gradientTo ? 'text-transparent' : 'text-primary'),
    backgroundImage(
      gradientFrom && gradientTo ? 'bg-gradient-to-r' : undefined
    ),
    backgroundClip(gradientFrom && gradientTo ? 'bg-clip-text' : undefined),
    gradientColorStops(gradientFrom, gradientTo),
    fontWeight({ 'font-bold': bold }),
    fontSize({ 'text-sm': small, 'text-xs': extraSmall }),
    lineHeight(small ? 'leading-4' : 'leading-5')
  )
export function LinkText({
  url,
  bold,
  small,
  extraSmall,
  internal,
  title,
  children,
  gradientFrom,
  gradientTo,
  underline,
}: ChildrenProp & {
  url: string
  small?: boolean
  extraSmall?: boolean
  internal?: boolean
  bold?: boolean
  title?: string
  gradientFrom?: TGradientColorStops
  gradientTo?: TGradientColorStops
  underline?: boolean
}) {
  const linkClassnames = linkText(
    small,
    extraSmall,
    bold,
    gradientFrom,
    gradientTo,
    underline
  )

  if (internal)
    return (
      <Link to={url} className={linkClassnames}>
        {children}
      </Link>
    )
  return (
    <a
      className={linkClassnames}
      href={url}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const bodyText = (
  primary?: boolean,
  bold?: boolean,
  semiBold?: boolean,
  small?: boolean,
  noWrap?: boolean,
  center?: boolean,
  inheritColor?: boolean
) =>
  classnames(
    fontFamily({ 'font-primary': primary }),
    textColor(inheritColor ? 'text-inherit' : 'text-formal-accent'),
    textAlign({ 'text-center': center }),
    fontWeight({ 'font-bold': bold, 'font-semibold': semiBold }),
    lineHeight('!leading-5'),
    fontSize(small ? 'text-xs' : 'text-sm'),
    whitespace({ 'whitespace-nowrap': noWrap })
  )
export function BodyText({
  primary,
  bold,
  semiBold,
  small,
  noWrap,
  center,
  children,
  inheritColor,
}: ChildrenProp & {
  primary?: boolean
  bold?: boolean
  semiBold?: boolean
  small?: boolean
  noWrap?: boolean
  center?: boolean
  inheritColor?: boolean
}) {
  return (
    <p
      className={bodyText(
        primary,
        bold,
        semiBold,
        small,
        noWrap,
        center,
        inheritColor
      )}
    >
      {children}
    </p>
  )
}

const headerText = (
  accent = false,
  center?: boolean,
  extraLeading = false,
  size = 'medium'
) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    fontSize(
      {
        'text-3.5xl': size === 'large',
        'text-2xl': size === 'medium',
        'text-xl': size === 'small',
      },
      size === 'small' ? 'xs:text-2xl' : 'xs:text-3.5xl'
    ),
    textColor(accent ? 'text-accent' : 'text-formal-accent'),
    extraLeading
      ? lineHeight('leading-10', 'md:leading-10.5')
      : lineHeight({ '!leading-8': size !== 'small' }),
    textAlign({ 'text-center': center })
  )
export function HeaderText({
  accent,
  center,
  extraLeading,
  size,
  children,
}: ChildrenProp & {
  accent?: boolean
  center?: boolean
  extraLeading?: boolean
  size?: 'large' | 'medium' | 'small'
}) {
  return (
    <h1 className={headerText(accent, center, extraLeading, size)}>
      {children}
    </h1>
  )
}

const loadingText = classnames(
  fontSize('text-xs', 'xs:text-sm'),
  lineHeight('!leading-5'),
  textAlign('text-center')
)
export function LoadingText({ children }: ChildrenProp) {
  return <h4 className={loadingText}>{children}</h4>
}

const cardTextContainer = classnames(
  fontFamily('font-primary'),
  lineHeight('leading-6')
)
export function CardParagraph({ children }: ChildrenProp) {
  return <p className={cardTextContainer}>{children}</p>
}

const statusText = (
  primary?: boolean,
  color?: 'accent' | 'primary' | 'error' | 'dimmed' | 'default',
  textRight?: boolean
) =>
  classnames(
    fontFamily({ 'font-primary': primary }),
    fontSize('text-xs'),
    lineHeight('leading-4'),
    textColor({
      'text-accent': color === 'accent',
      'text-primary': color === 'primary',
      'text-error': color === 'error',
      'text-formal-accent': color === 'default',
      'text-primary-dimmed': color === 'dimmed',
    }),
    textAlign({ 'text-right': textRight })
  )
export function StatusText({
  color = 'default',
  primary,
  textRight,
  children,
}: ChildrenProp & {
  primary?: boolean
  color?: 'accent' | 'primary' | 'error' | 'dimmed' | 'default'
  textRight?: boolean
}) {
  return (
    <span className={statusText(primary, color, textRight)}>{children}</span>
  )
}

const postText = classnames(
  fontFamily('font-primary'),
  fontSize('text-base'),
  lineHeight('leading-6'),
  whitespace('whitespace-pre-wrap')
)
export function PostText({ children }: ChildrenProp) {
  return <p className={postText}>{children}</p>
}

const footerLink = (active?: boolean) =>
  classnames(
    fontSize('text-sm'),
    fontWeight('font-semibold'),
    textDecoration({ underline: active, 'hover:underline': true }),
    textColor({ 'text-accent': active, 'hover:text-accent': true }),
    transitionProperty('transition-colors')
  )
export function FooterLink({
  url,
  children,
  internal,
}: ChildrenProp & { url: string; internal?: boolean }) {
  if (internal)
    return (
      <Link
        to={url}
        className={({ isActive }: { isActive?: boolean }) =>
          footerLink(isActive)
        }
      >
        {children}
      </Link>
    )

  return (
    <a
      className={footerLink()}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const cardSubheaderContainer = classnames(
  fontWeight('font-bold'),
  fontFamily('font-primary'),
  fontSize('text-lg')
)
export function CardSubheader({ children }: ChildrenProp) {
  return <p className={cardSubheaderContainer}>{children}</p>
}

export function SubHeaderText({
  children,
  defaultFont,
}: ChildrenProp & { defaultFont?: boolean }) {
  return (
    <p className={fontFamily({ 'font-primary': !defaultFont })}>{children}</p>
  )
}

const logoText = classnames(
  textColor('text-accent'),
  fontWeight('font-bold'),
  fontSize('text-sm', 'xs:text-lg'),
  lineHeight('leading-none')
)
export function LogoText({ children }: ChildrenProp) {
  return <span className={logoText}>{children}</span>
}

const socialLink = classnames(
  lineHeight('leading-6'),
  fontSize('text-base'),
  textDecoration('no-underline', 'active:underline'),
  textColor('hover:text-tertiary', 'text-formal-accent')
)
export function SocialLink({ url, children }: ChildrenProp & { url: string }) {
  return (
    <a
      className={classNamesToString(socialLink, 'hover-tertiary')}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const textareaText = (dark?: boolean) =>
  classnames(
    display('flex'),
    fontFamily('font-primary'),
    alignItems('items-center'),
    textColor({
      'text-formal-accent-semi-transparent': dark,
      'text-formal-accent': !dark,
    }),
    placeholderColor('placeholder-formal-accent-dimmed'),
    caretColor('caret-primary')
  )
export function TextareaText({
  dark,
  children,
}: ChildrenProp & { dark?: boolean }) {
  return <div className={textareaText(dark)}>{children}</div>
}

const errorText = (centered?: boolean) =>
  classnames(
    textColor('text-error'),
    fontWeight('font-medium'),
    fontFamily('font-primary'),
    textAlign({ 'text-center': centered })
  )
export function ErrorText({
  children,
  centered,
}: ChildrenProp & {
  centered?: boolean
  withExclamation?: boolean
  visible?: boolean
}) {
  return <p className={errorText(centered)}>{children}</p>
}

const suffixText = classnames(
  fontSize('text-sm'),
  lineHeight('leading-5'),
  textColor('text-formal-accent-semi-transparent'),
  wordBreak('break-all')
)
export function SuffixText({ children }: ChildrenProp) {
  return <span className={suffixText}>{children}</span>
}

export const highlightedText = (bold?: boolean, center?: boolean) =>
  classnames(
    width('w-fit'),
    textColor('text-primary-dark'),
    fontWeight(bold ? 'font-bold' : 'font-semibold'),
    fontFamily({ 'font-primary': bold }),
    fontSize({ 'text-sm': bold }),
    lineHeight(bold ? 'leading-6' : 'leading-5'),
    textAlign({ 'text-center': center })
  )
export function HighlightedText({
  bold,
  center,
  children,
}: ChildrenProp & {
  bold?: boolean
  center?: boolean
}) {
  return <div className={highlightedText(bold, center)}>{children}</div>
}
