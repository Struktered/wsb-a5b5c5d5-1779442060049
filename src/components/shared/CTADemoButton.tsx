export default function CTADemoButton() {
  function handleClick() {
    const el = document.getElementById('demo-buchung');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        backgroundColor: 'var(--color-cta)',
        color: 'var(--color-bg)',
        transitionDuration: 'var(--duration-base)',
      }}
      className="px-5 py-2 font-medium rounded-sm cursor-pointer transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      Demo buchen
    </button>
  );
}