import React, { useState } from 'react'
import PropTypes from 'prop-types'

const EmojiList = ({ emojis, onAdd, onRemove }) => {
    // constructor(props) {
    //   super(props);
    //
    //   this.addEmoji = this.addEmoji.bind(this);
    //   this.removeEmoji = this.removeEmoji.bind(this);
    //   this.handleChangeNewEmoji = this.handleChangeNewEmoji.bind(this);
    // }
    const [emoji, setEmoji] = useState('')
    const [error, setError] = useState('')

    const addEmoji = () => {
        if (emojis.indexOf(emoji) >= 0) {
            setError('That emoji has already been added.')
        } else {
            onAdd(emoji)
            setEmoji('')
        }
    }

    const removeEmoji = event => {
        onRemove(event.target.dataset.name)
    }

    const handleChangeNewEmoji = event => {
        setEmoji(event.target.value)
    }

    const renderError = () => {
        if (error) {
            return <div className="edit-error">{error}</div>
        }
        return <div />
    }

    return (
        <div>
            {renderError()}
            <div>
                {emojis.map(emo => (
                    <div className="item" key={emo}>
                        <code>{emo}</code>
                        &nbsp;
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                        <i
                            className="fa fa-times"
                            data-name={emo}
                            onClick={removeEmoji()}
                        />
                    </div>
                ))}
            </div>

            <form>
                <input
                    type="text"
                    value={emoji}
                    onChange={handleChangeNewEmoji()}
                />
                <button disabled={emoji === ''} onClick={addEmoji()}>
                    Add
                </button>
            </form>
        </div>
    )
}

EmojiList.propTypes = {
    emojis: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}

EmojiList.defaultProps = {
    emojis: [],
}

export default EmojiList
