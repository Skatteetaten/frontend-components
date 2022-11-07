import * as React from 'react';
import waitAlertSvg from './assets/wait_alert_illustration.svg';
import { t } from '../utils';
import { Button } from '../Button';

const WaitAlert: React.FC<{
  onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;
  waitAlertBtnText?: string;
}> = (props) => {
  return (
    <div className={'wait-alert-content'}>
      <img
        className={'wait-alert-svg'}
        src={waitAlertSvg}
        alt={t('dialog.waitAlert.alt')}
      />
      {props.children ? (
        props.children
      ) : (
        <>
          <div
            role="heading"
            id={'waitAlertHeading'}
            className={'wait-alert-heading'}
            aria-level={1}
          >
            {t('dialog.waitAlert.title')}
          </div>
          <p id={'waitAlertText'}>{t('dialog.waitAlert.paragraph')}</p>
        </>
      )}
      <Button
        buttonStyle="primary"
        className={'wait-alert-btn'}
        onClick={() => {
          props.onDismiss && props.onDismiss();
        }}
      >
        {props.waitAlertBtnText
          ? props.waitAlertBtnText
          : t('dialog.waitAlert.button_text')}
      </Button>
    </div>
  );
};

export default WaitAlert;
