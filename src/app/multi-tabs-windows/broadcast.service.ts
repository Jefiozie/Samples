import { DestroyRef, inject, signal } from '@angular/core';

export const createBroadCastChannel = (
  name: string = 'xxx',
  initialValue: string | null = null
) => {
  const channel = new BroadcastChannel(name);
  const destroyRef = inject(DestroyRef);
  const value = signal<null | string>(initialValue ?? '');

  const onMessage = (message: MessageEvent) => {
    value.set(message.data);
    return message.data;
  };

  channel.addEventListener('message', onMessage);
  destroyRef.onDestroy(() => {
    window.removeEventListener('message', onMessage);
  });

  const sendMessage = (message: string) => {
    console.debug('Sending message', message);
    channel.postMessage(message);
  };

  return { value, sendMessage };
};
