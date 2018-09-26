import dotProp from 'dot-prop-immutable';
import React from 'react';

import IziForm from '~components/IziForm';
import { IShareFormTrack, IShareFormValidation, IShareFormValues } from '~renderer/ui/SharePage/types';
import { toNextValues } from '~renderer/ui/SharePage/utils/toNextValues';
import { AboutFieldset } from '~renderer/ui/SharePage/view/ShareForm/AboutFieldset';
import { FormControls } from '~renderer/ui/SharePage/view/ShareForm/FormControls';
import { TracklistFieldset } from '~renderer/ui/SharePage/view/TracklistFieldset';
import e2e from '~shared/data/e2e';
import validateShareCandidate from '~shared/utils/validateShareCandidate';
import './ShareForm.css';

interface IProps {
  isDisabled: boolean;
  values: IShareFormValues;
  coverSrc: string | null;
  onCancel(): void;
  onReset(): void;
  onChange(v: IShareFormValues): void;
  onSubmit(v: IShareFormValues): void;
}

interface IState {
  validationErrors: IShareFormValidation;
}

export class ShareForm extends React.Component<IProps, IState> {
  public state: IState = {
    validationErrors: {}
  };

  public componentWillMount(): void {
    if (this.props.values) {
      this.validate(this.props.values);
    }
  }

  public componentWillReceiveProps(nextProps: IProps): void {
    if (nextProps.values !== this.props.values) {
      this.validate(nextProps.values);
    }
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const nextValues: IShareFormValues = toNextValues(this.props.values, e);
    if (nextValues !== this.props.values) {
      this.props.onChange(nextValues);
    }
  }

  public handleRemoveTrack = (index: number): void => {
    const { values } = this.props;
    const nextValues: IShareFormValues = dotProp.delete(values, `tracks.${index}`);
    this.props.onChange(nextValues);
  }

  public handleMoveTrack = (index: number, isUp: boolean): void => {
    const { values } = this.props;
    const track1Path: string = `tracks.${index}`;
    const track2Path: string = `tracks.${isUp ? index - 1 : index + 1}`;
    const track1: IShareFormTrack = dotProp.get(values, track1Path);
    const track2: IShareFormTrack = dotProp.get(values, track2Path);
    const proxyValues: IShareFormValues = dotProp.set(values, track1Path, track2);
    const nextValues: IShareFormValues = dotProp.set(proxyValues, track2Path, track1);
    this.props.onChange(nextValues);
  }

  public handleMoveTrackDown = (index: number): void => {
    this.handleMoveTrack(index, false);
  }

  public handleMoveTrackUp = (index: number): void => {
    this.handleMoveTrack(index, true);
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (Object.keys(this.state.validationErrors).length === 0) {
      this.props.onSubmit(this.props.values);
    }
  }

  public validate = (values: IShareFormValues): void => {
    const errors: IShareFormValidation = validateShareCandidate(values);
    this.setState({ validationErrors: errors || {} });
  }

  public render(): React.ReactElement<IProps> {
    const {
      values,
      isDisabled,
      coverSrc,
      onCancel,
      onReset
    } = this.props;
    const { validationErrors } = this.state;

    return (
      <IziForm
        id={e2e.SHARE_FORM_ID}
        className='shareForm'
        values={values}
        errors={validationErrors}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <div className='shareFormBody'>
          <AboutFieldset
            coverSrc={coverSrc}
            isDisabled={isDisabled}
          />
          <TracklistFieldset
            tracks={values.tracks}
            errorMessage={validationErrors.tracks}
            isDisabled={isDisabled}
            onMoveTrackUp={this.handleMoveTrackUp}
            onMoveTrackDown={this.handleMoveTrackDown}
            onRemoveTrack={this.handleRemoveTrack}
          />
        </div>
        <div className='shareFormControls'>
          <FormControls
            isDisabled={isDisabled}
            onCancelClick={onCancel}
            onResetClick={onReset}
          />
        </div>
      </IziForm>
    );
  }
}
