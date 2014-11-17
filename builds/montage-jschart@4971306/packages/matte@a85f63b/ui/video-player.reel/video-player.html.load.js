montageDefine("a85f63b","ui/video-player.reel/video-player.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=video-player.css>\n    <script type=text/montage-serialization>{"durationText":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"duration"}}},"positionText":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"position"}}},"durationSlider":{"prototype":"ui/input-range.reel","properties":{"element":{"#":"durationSlider"},"min":0}},"playButton":{"prototype":"ui/toggle-button.reel","properties":{"element":{"#":"playButton"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"rewindButton":{"prototype":"ui/button.reel","properties":{"element":{"#":"rewindButton"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"fastForwardButton":{"prototype":"ui/button.reel","properties":{"element":{"#":"ffButton"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"decreaseVolumeButton":{"prototype":"ui/button.reel","properties":{"element":{"#":"decreaseVolume"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"increaseVolumeButton":{"prototype":"ui/button.reel","properties":{"element":{"#":"increaseVolume"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"muteButton":{"prototype":"ui/button.reel","properties":{"element":{"#":"muteButton"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"repeatButton":{"prototype":"ui/button.reel","properties":{"element":{"#":"repeatButton"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"fullScreenButton":{"prototype":"ui/button.reel","properties":{"element":{"#":"fullScreenButton"}},"listeners":[{"type":"action","listener":{"@":"owner"},"capture":false}]},"prettyTimeConverter":{"prototype":"ui/video-player.reel/video-player[PrettyTimeConverter]"},"owner":{"prototype":"ui/video-player.reel","properties":{"mediaElement":{"#":"video-tag"},"element":{"#":"video-player"},"playButton":{"@":"playButton"},"repeatButton":{"@":"repeatButton"},"volumeLevel":{"#":"volumeLevel"},"controls":{"#":"controlWrapper"},"fullScreenPanel":{"#":"fullScreenPanel"},"fullScreenButton":{"@":"fullScreenButton"},"slider":{"@":"durationSlider"},"durationText":{"@":"durationText"},"positionText":{"@":"positionText"}},"bindings":{"positionText.value":{"<-":"videoController.position","converter":{"@":"prettyTimeConverter"}},"durationText.value":{"<-":"videoController.duration","converter":{"@":"prettyTimeConverter"}},"slider.max":{"<-":"videoController.duration"},"slider.value":{"<->":"videoController.position"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=video-player class=matte-VideoPlayer>\n        <video data-montage-id=video-tag class=matte-VideoPlayer-video></video>\n        <div data-montage-id=controlWrapper class=control-wrapper>\n            <div data-montage-id=controller class=controller>\n                <div class=controller-button-panel>\n                    <div data-montage-id=repeatButton class="repeat controller-button" title="Repeat Video"></div>\n                    <div data-montage-id=rewindButton class="rw controller-button" title=Rewind> </div>\n                    <div data-montage-id=playButton class="play controller-button" title=Play/Pause> </div>\n                    <div data-montage-id=ffButton class="ff controller-button" title="Fast Forward"> </div>\n                </div>\n                <div class=controller-scrubber-panel>\n                    <div data-montage-id=position class="position controller-text"></div>\n                    <div data-montage-id=durationSlider class="scrubber dark"></div>\n                    <div data-montage-id=duration class="duration controller-text"></div>\n                </div>\n                <div class=controller-volume-panel>\n                    <div data-montage-id=muteButton class="mute controller-button" title=Mute></div>\n                    <div data-montage-id=decreaseVolume class="volume-minus controller-button" title="Decrease Volume"> </div>\n                    <div class="volume controller-progress"><div data-montage-id=volumeLevel class=volume-progress></div></div>\n                    <div data-montage-id=increaseVolume class="volume-plus controller-button" title="Increase Volume"> </div>\n                </div>\n                <div data-montage-id=fullScreenPanel class=controller-fullscreen-panel>\n                    <div data-montage-id=fullScreenButton class="fullscreen controller-button" title="Toggle Fullscreen"> </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</body></html>'});