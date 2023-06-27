type PricingListItemProps = {
  children: React.ReactNode;
};
export default function PricingListItem({children}: PricingListItemProps) {
  return <li className='text-black/75'>- {children}</li>;
}
